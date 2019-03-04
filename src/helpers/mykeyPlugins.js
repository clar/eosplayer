'use strict'

import Log_ from '../utils/log'
const log = Log_('MykeyPlugins')

/**
 * Mykey plugins help to sign and validate signature
 */
export class MykeyPlugins {
  /**
   * initiate with the chain helper
   * @param {ChainHelper} chain
   */
  constructor (chain, config = {mgrcontract: "mykeymanager"}) {
    this._chain = chain
    this._config = config
  }

  /**
     * get Mykey account sign key
     * @param {string} account - Mykey account
     * @return {string} 
     */
  async getMykeyAccountSignKey(account) {
    const { permissions } = await this._chain.getAccountInfo(account)
    if (!permissions) {
      log.info(`permissions of account ${account} are not found.`)
      return
    }

    const perm = permissions.find(p => p.perm_name === "active")
    log.info(`perm : ${JSON.stringify(perm)}`)
    const { accounts} = perm.required_auth
    let mgrcontract = accounts[0].permission.actor

    return await this.getSignKey(account, mgrcontract)
  }

  async getSignKey(account, mgrcontract) {
    let mykey_signkey_table = "keydata" 
    let mykey_signkey_index = 3
    let keydata = await this._chain.getTable(mgrcontract, mykey_signkey_table, account, mykey_signkey_index, mykey_signkey_index + 1);
    if(!keydata) return "";

    return keydata[0].key.pubkey;
  }

  get signkeyPlugin () {
    let mgr_active_perm = `${this._config.mgrcontract}@active`
    let plugin = {
      [mgr_active_perm] : async (account) => {
        return await this.getSignKey(account, this._config.mgrcontract)
      }
    }

    return plugin;
  }

  get validateSignPlugin () {
    let mgr_active_perm = `${this._config.mgrcontract}@active`
    let plugin = {
      [mgr_active_perm] : async (account, recoverKey) => {
        let pubkey = await this.getSignKey(account, this._config.mgrcontract)
        return pubkey === recoverKey
      }
    }
    return plugin;
  } 
}