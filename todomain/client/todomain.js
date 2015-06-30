

Template.todomain.onRendered(function(){

})


Template.todomain.helpers({
tasks : function(){
  return Tasks.find({})
}
})


Template.todomain.events({
'submit #todoform' : function(event,template){
  var taskvalue = event.currentTarget.task.value;
  Tasks.insert({task : taskvalue, status : false});
  event.currentTarget.task.value = "";
  return false;
}
})
