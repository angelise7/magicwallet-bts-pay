
(function (window) {
  if (!window) return;

  var magicwallet_pay_data;
  var magicwallet_bts_account;

  var magicwallet_send_bts_account = function (data) {
    magicwallet_bts_account = data;
  }

  var magicwallet_get_pay_data = function () {
    return magicwallet_pay_data
  }

  var magicwalletGetBtsAccount = function () {
    return new Promise(function (resolve, reject) {
      if (!magicwallet_bts_account) {
        var get_bts_account_interval = setInterval(function () {
          var bts_account = magicwallet_bts_account;
          if (bts_account) {
            resolve(bts_account);
            clearInterval(get_bts_account_interval);
          }
        }, 1000)

        setTimeout(() => {
          clearInterval(get_bts_account_interval);
        }, 15000);
      } else {
        resolve(magicwallet_bts_account)
      }
    })
  }

  var magicwallet_timeout_promise = function (ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms);
    }).then(function () {
      throw ("error");
    });
  }

  var magicwallet_get_bts_account = function () {
    return Promise.race([
      magicwalletGetBtsAccount(),
      magicwallet_timeout_promise(15000),
    ])
  }


  var magicwallet_confirm_pay = function (pay_account, pay_asset, pay_amount) {
    return new Promise(function (resolve, reject) {
      magicwallet_pay_data = {
        pay_account: pay_account,
        pay_asset: pay_asset,
        pay_amount: pay_amount,
      }

      if (!pay_account || !pay_asset || !pay_amount) {
        reject('缺少参数');
        return
      }

      if (window) {
        window.open('magicWalletBtsPayClose');
      } else {
        resolve()
      }
    })
  }

  window.magicwallet_send_bts_account = magicwallet_send_bts_account;
  window.magicwallet_get_pay_data = magicwallet_get_pay_data;
  window.magicwallet_get_bts_account = magicwallet_get_bts_account;
  window.magicwallet_confirm_pay = magicwallet_confirm_pay;
})(window)
