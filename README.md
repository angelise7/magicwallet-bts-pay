# magicwallet-bts-pay 

### Installation
To install magicwallet-bts-pay,use npm

```
npm install magicwallet-bts-pay 
```

### Usage

```
<script src="magicwallet-bts-pay.js"></script>
```


1. get bts account

```
magicwallet_get_bts_account(function(account){
  console.log(account)
},function(error){
  console.log(error)
});
```

2. confirm pay

```
magicwallet_confirm_pay(pay_account,pay_asset,pay_amount,order_id)
```

3. close(用于关闭页面使用,platform参数会在magicwallet_get_bts_account方法中获取到)

```
magicwallet_close_button(platform)
```

4. 有两个方法用于APP发送账号数据和接受支付数据,请注意不要重复声明并且调用
```
magicwallet_send_bts_account()
magicwallet_get_pay_params()
```
