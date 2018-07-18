# magicwallet-bts-pay 

### Installation
To install magicwallet-bts-pay,use npm

```
npm install magicwallet-bts-pay 
```

### Usage

1. get bts account

get_bts_account(function(account){
  console.log(account)
},function(error){
  console.log(error)
});


2. confirm pay

confirm_pay(btsAccount,orderId,storeId)