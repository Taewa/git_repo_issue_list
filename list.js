var res;

$.each($(".issue.closed"), function(i){
	var num;
	var title = $(this).find('.issue-title-text > a').text();


	$(this).find('.issue-info').text(function(i, s){
		num = s.match(/#\d+ /g);	//Return #number
	});


	res += num + title + '\n';
});

//If it's firefox, just : res
console.log(res);