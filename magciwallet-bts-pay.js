var magicwallet_order;
var magicwallet_bts_account;

function send_bts_account(data) {
  magicwallet_bts_account = data.magicwallet_bts_account;
}

function get_order_data() {
  return magicwallet_order
}

function confirm_pay(btsAccount, orderId, storeId) {
  return new Promise(function (resolve, reject) {
    magicwallet_order = {
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

var confirmPayBtn = document.getElementById('confirmPayBtn');
confirmPayBtn.onclick = function () {
  confirm_pay('angelise7', 'orderId', 'storeId')
}


function get_bts_account() {
  return new Promise(function (resolve, reject) {
    if (!magicwallet_bts_account) {
      var get_bts_account_interval = setInterval(function () {
        magicwallet_bts_account = magicwallet_bts_account;
        if (magicwallet_bts_account) {
          resolve(magicwallet_bts_account);
          clearInterval(get_bts_account_interval);
        }
      }, 1000)
    } else {
      resolve(magicwallet_bts_account)
    }

    setTimeout(() => {
      if (!magicwallet_bts_account) {
        reject('error')
        return
      }
    }, 10000);
  })
}