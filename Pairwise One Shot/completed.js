function pairwise(e,i){var r=e.slice();return r.reduce(function(e,n,a){var f=i-n;if(-1!=r.indexOf(f)&&r.indexOf(f)!=a){var c=a+r.indexOf(f);return r.splice(a,1,NaN),r.splice(r.indexOf(f),1,NaN),e+c}return e},0)}pairwise([1,4,2,3,0,5],7);