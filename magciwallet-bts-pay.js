var magicwallet_pay_data;
var magicwallet_bts_account;

function magicwallet_send_bts_account(data) {
  magicwallet_bts_account = data.magicwallet_bts_account;
}

function magicwallet_get_pay_data() {
  return magicwallet_pay_data
}

function magicwallet_confirm_pay(btsAccount, orderId, storeId) {
  return new Promise(function (resolve, reject) {
    magicwallet_pay_data = {
      btsAccount: btsAccount,
      orderId: orderId,
      storeId: storeId,
    }

    if (!btsAccount || !orderId || !storeId) {
      reject('缺少参数');
      return
    }

    if (window) {
      window.open('close');
    } else {
      resolve()
    }
  })
}

function magicwalletGetBtsAccount() {
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

function magicwallet_timeout_promise(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  }).then(function () {
    throw ("error");
  });
}

function magicwallet_get_bts_account() {
  return Promise.race([
    magicwalletGetBtsAccount(),
    magicwallet_timeout_promise(15000),
  ])
}