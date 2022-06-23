let p;
const primes = [1, 2];
n = 400;
for (i=3;i<=n;i=i+2) {
  p = true;
	for (j=1;j < primes.length;j ++) {
  	if(i % primes[j] == 0){
    	p = false;
      break;
    }
  }
  if(p) {
  	primes[primes.length] = i
  }
}
console.log(primes)