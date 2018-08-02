# magicwallet-bts-pay 

### Installation
To install magicwallet-bts-pay,use npm

```
npm install magicwallet-bts-pay 
```

### Usage

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
magicwallet_confirm_pay(pay_account,pay_asset,pay_amount)
```

3. 有两个方法用于APP发送账号数据和接受支付数据,请注意不要重复声明
```
magicwallet_send_bts_account()
magicwallet_get_pay_data()
```
