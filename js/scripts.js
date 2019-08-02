function Detail(service, location, brand, model){
  this.service = service;
  this.location = location;
  this.brand = brand;
  this.model = model;
}





$(document).ready(function(){
  $("#osugo-pic").click(function(){
    $("#osugo-desc").show();
    $("#osugo-icon").hide();
  });
  $("#osugo-desc").click(function(){
    $("#osugo-icon").show();
    $("#osugo-desc").hide();
  });
  $("#baraka-pic").click(function(){
    $("#baraka-desc").show();
    $("#baraka-icon").hide();
  });
  $("#baraka-desc").click(function(){
    $("#baraka-icon").show();
    $("#baraka-desc").hide();
  });$("#rita-pic").click(function(){
    $("#rita-desc").show();
    $("#rita-icon").hide();
  });
  $("#rita-desc").click(function(){
    $("#rita-icon").show();
    $("#rita-desc").hide();
  });
  $("#frank-pic").click(function(){
    $("#frank-desc").show();
    $("#frank-icon").hide();
  });
  $("#frank-desc").click(function(){
    $("#frank-icon").show();
    $("#frank-desc").hide();
  });
  $("#mike-pic").click(function(){
    $("#mike-desc").show();
    $("#mike-icon").hide();
  });
  $("#mike-desc").click(function(){
    $("#mike-icon").show();
    $("#mike-desc").hide();
  });
  $("#komen-pic").click(function(){
    $("#komen-desc").show();
    $("#komen-icon").hide();
  });
  $("#komen-desc").click(function(){
    $("#komen-icon").show();
    $("#komen-desc").hide();
  });
});
/* adding hide and show properties to mechanics page*/
$(document).ready(function(){
    $("#select1").click(function(){
        $("#mechanic1profile").show(300);
        $("#select1").hide(300);
    });
    $("#mail1").click(function(){
        $("#mechanic1profile").hide(300);
        $("#select1").show(300);
    });
    $("#select2").click(function(){
        $("#mechanic2profile").show(300);
        $("#select2").hide(300);
    });
    $("#mail2").click(function(){
        $("#mechanic2profile").hide(300);
        $("#select2").show(300);
    });
    $("#select3").click(function(){
        $("#mechanic3profile").show(300);
        $("#select3").hide(300);
    });
    $("#mail3").click(function(){
        $("#mechanic3profile").hide(300);
        $("#select3").show(300);
    });
    $("#select4").click(function(){
        $("#mechanic4profile").show(300);
        $("#select4").hide(300);
    });
    $("#mail4").click(function(){
        $("#mechanic4profile").hide(300);
        $("#select4").show(300);
    });
    $("#select5").click(function(){
        $("#mechanic5profile").show(300);
        $("#select5").hide(300);
    });
    $("#mail5").click(function(){
        $("#mechanic5profile").hide(300);
        $("#select5").show(300);
    });
    $("#select6").click(function(){
        $("#mechanic6profile").show(300);
        $("#select6").hide(300);
    });
    $("#mail6").click(function(){
        $("#mechanic6profile").hide(300);
        $("#select6").show(300);
    });
    $("#select7").click(function(){
        $("#mechanic7profile").show(300);
        $("#select7").hide(300);
    });
    $("#mail7").click(function(){
        $("#mechanic7profile").hide(300);
        $("#select7").show(300);
    });
    $("#select8").click(function(){
        $("#mechanic8profile").show(300);
        $("#select8").hide(300);
    });
    $("#mail8").click(function(){
        $("#mechanic8profile").hide(300);
        $("#select8").show(300);
    });
});


$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var selectedService = $('#selectservice').val();
    var selectedLocation = $('#selectlocation').val();
    var selectedBrand = $('#vehiclebrand').val();
    var inputtedModel = $('#vehiclemodel').val();

    var newDetail = new Detail(selectedService, selectedLocation, selectedBrand, inputtedModel);

    if (newDetail.location == "1" && newDetail.service == "1"){
      $('.kawangware').show();
    }
    else if (newDetail.location == "2" && newDetail.service == "1"){
      $('.jamhuri').show();
    }
    else if (newDetail.location == "1" && newDetail.service == "2"){
      $('.kawa-tow').show();
    }
    else{
      $('.jamu-tow').show();
    }

  });

  $('#kawa-close').click(function(){
      $('.kawangware').hide();
  });
  $('#kawatow-close').click(function(){
      $('.kawa-tow').hide();
  });

  $('#jamu-close').click(function(){
      $('.jamhuri').hide();
  });

  $('#jamutow-close').click(function(){
      $('.jamu-tow').hide();
  });



});
