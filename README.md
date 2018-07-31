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
