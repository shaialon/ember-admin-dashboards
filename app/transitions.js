export default function(){
	this.transition(
		this.hasClass('drilldown'),
		this.use('crossFade')
	);

	this.transition(
		this.use('crossFade')
	);
}