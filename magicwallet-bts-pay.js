(function (window) {
  if (!window) return;

  var magicwallet_bts_account;

  var magicwallet_send_bts_account = function (data) {
    magicwallet_bts_account = data;
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


  var magicwallet_confirm_pay = function (pay_account, pay_asset, pay_amount, order_id) {
    if (!pay_account || !pay_asset || !pay_amount || !order_id) {
      return
    }
    location.href = "https://magicwallet-btspay.magicw.net?pay_account=" + pay_account + "&pay_asset=" + pay_asset + "&pay_amount=" + pay_amount + "&order_id=" + order_id;
  }

  var magicwallet_get_pay_params = function getParams() {
    var url = window.location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }

  var magicwallet_close_button = function (platform) {
    if (!platform) {
      return
    }

    if (platform == 'ios') {
      location.href = location.href + "#magicWalletCloseButton";
    } else if (platform == 'android') {
      location.href = location.href + '&magicWalletCloseButton';
    }
  }

  window.magicwallet_send_bts_account = magicwallet_send_bts_account;
  window.magicwallet_get_bts_account = magicwallet_get_bts_account;
  window.magicwallet_confirm_pay = magicwallet_confirm_pay;
  window.magicwallet_close_button = magicwallet_close_button;
  window.magicwallet_get_pay_params = magicwallet_get_pay_params;
})(window)