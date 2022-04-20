function secondfunction() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('waiting');
    const result = await secondfunction();
    console.log(result);
  }
  
  asyncCall();