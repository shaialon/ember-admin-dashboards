export default function(){
	this.transition(
	  this.toRoute('index'),
	  this.use('toLeft')
	);
}