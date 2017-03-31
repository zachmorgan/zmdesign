$(document).foundation();

var exTabs = new Foundation.Tabs($('#projectTabs'), options);
$('#projectTabs').foundation('_handleTabChange', $target);
$('#projectTabs').foundation('_openTab', $target);
$('#projectTabs').foundation('_collapseTab', $target);
$('#projectTabs').foundation('selectTab', elem);
$('#projectTabs').foundation('data-auto-focus', true);

var cModal = new Foundation.Reveal($('#contactModal'));
$('#contactModal').foundation('toggle');


  // Contact Form
  var $cont = $('.contact-form');
  var $close = $('.contClose');
  $('#contact, #mobCont').click(function(){
    if( $cont.hasClass('bounceOutUp') ) {
      $cont.removeClass('bounceOutUp').addClass('bounceInDown').css('display', 'block');
    }else if( $cont.hasClass('bounceInDown') ){
      $cont.removeClass('bounceInDown').addClass('bounceOutUp');
      setTimeout(function(){
        $cont.css("display", "none");
      }, 1000);
    }else{
      $cont.addClass('bounceInDown').css('display', 'block');
    }
  });

  $('#contClose').click(function(){
    if( $cont.hasClass('bounceInDown') ){
      $cont.removeClass('bounceInDown').addClass('bounceOutUp');
    }
  });
  
    // Ajax Contact Form
  $(function() {

    var form1 = $('#contact1');
    var form2 = $('#contact2');
    var formMessage1 = $('#form-message1');
    var formMessage2 = $('#form-message2');

    $(form1).submit(function(e) {
      e.preventDefault();
      var formData = $(form1).serialize();
      $.ajax({
        type: 'POST',
        url: $(form1).attr('action'),
        data: formData
      })
      .done(function(response) {
        $(formMessage1).removeClass('error');
        $(formMessage1).addClass('success');
        $(formMessage1).text(response);
        $('#cont1Name').val('');
        $('#cont1Email').val('');
        $('#cont1Subject').val('');
        $('#cont1Comments').val('');
      })
      .fail(function(data) {
        $(formMessage1).removeClass('success');
        $(formMessage1).addClass('error');
        if (data.responseText !== '') {
          $(formMessage1).text(data.responseText);
        } else {
          $(formMessage1).text('Oops! An error occured and your message could not be sent.');
        }
      });
    });

    $(form2).submit(function(e) {
      e.preventDefault();
      var formData = $(form2).serialize();
      $.ajax({
        type: 'POST',
        url: $(form2).attr('action'),
        data: formData
      })
      .done(function(response) {
        $(formMessage2).removeClass('error');
        $(formMessage2).addClass('success');
        $(formMessage2).text(response);
        $('#cont2Name').val('');
        $('#cont2Email').val('');
        $('#cont2Subject').val('');
        $('#cont2Comments').val('');
      })
      .fail(function(data) {
        $(formMessage2).removeClass('success');
        $(formMessage2).addClass('error');
        if (data.responseText !== '') {
          $(formMessage2).text(data.responseText);
        } else {
          $(formMessage2).text('Oops! An error occured and your message could not be sent.');
        }
      });
    });
  });