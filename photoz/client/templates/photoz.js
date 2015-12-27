Template.photos.helpers({
  photos: function(){
    return Photos.find();
  }
});

Template.addphotos.events({
  "submit .addphotoform": function(){
    var file = $("#myphoto").get(0).files[0];
    if (file) {
      fsFile = new FS.File(file);
      Photos.insert(fsFile, function(error, result){
        if(error){
          console.log(error)
        }else{
          toastr.success("File uploaded!");
          Router.go("/");
        }
      })
    }else{
      toastr.error("No File Uploaded!");
      Router.go("/add");
    }
    return false;
  }
});