export default function(){
	this.transition(
		this.hasClass('drilldown'),
		this.use('crossFade')
	);

	this.transition(
		this.toRoute('widgets'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.use('crossFade')
	);
}