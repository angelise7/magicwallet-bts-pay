(function (window) {
  window.magicWalletBtsPay = window.magicWalletBtsPay || {};


  //APP发送BTS账号信息
  magicWalletBtsPay.magicwalletSendBtsAccount = function (data) {
    magicWalletBtsPay.magicwallet_bts_account = data;
  };


  //获取BTS账号信息
  magicWalletBtsPay.magicwalletGetBtsAccount = function () {
    return Promise.race([
      magicWalletBtsPay._magicwalletGetBtsAccount(),
      magicWalletBtsPay._magicwalletTimeoutPromise(15000),
    ])
  }

  //确认支付
  magicWalletBtsPay.magicwalletConfirmPay = function (pay_account, pay_asset, pay_amount, order_id) {
    if (!pay_account || !pay_asset || !pay_amount || !order_id) {
      return
    }
    location.href = "https://magicwallet-btspay.magicw.net?pay_account=" + pay_account + "&pay_asset=" + pay_asset + "&pay_amount=" + pay_amount + "&order_id=" + order_id;
  }

  //APP端获取支付信息
  magicWalletBtsPay.magicwalletGetPayParams = function () {
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

  //关闭按钮
  magicWalletBtsPay.magicwalletCloseButton = function (platform) {
    if (!platform) {
      return
    }

    if (platform == 'ios') {
      location.href = location.href + "#magicWalletCloseButton";
    } else if (platform == 'android') {
      location.href = location.href + '&magicWalletCloseButton';
    }
  }

  magicWalletBtsPay._magicwalletGetBtsAccount = function () {
    return new Promise(function (resolve, reject) {
      if (!magicWalletBtsPay.magicwallet_bts_account) {
        var get_bts_account_interval = setInterval(function () {
          if (magicWalletBtsPay.magicwallet_bts_account) {
            resolve(magicWalletBtsPay.magicwallet_bts_account);
            clearInterval(get_bts_account_interval);
          }
        }, 1000)

        setTimeout(() => {
          clearInterval(get_bts_account_interval);
        }, 15000);
      } else {
        resolve(magicWalletBtsPay.magicwallet_send_bts_account.prototype.magicwallet_bts_account)
      }
    })
  }

  magicWalletBtsPay._magicwalletTimeoutPromise = function (ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms);
    }).then(function () {
      throw ("error");
    });
  }
}(window));