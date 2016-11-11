

//displaying modal

	$('.img-responsive').on('click', function() {
		var modalTitle = $(this).parent('div').children('span').children('p').text();
		$('.modal-title').text(modalTitle);
		$('#infoModal').modal('toggle');
	})


	// get the content of the form page when the user enters history and post it on mysql server
	$('#historySubmit').on('click', function() {
		event.preventDefault();

		var addHistory = {
			"history_date": $('#year').val().trim(),
			content: $('#historyContent').val().trim()
			}

		$.post('/form/new', addHistory)
		 .done(function (data) {
			alert('history added');
		})

	})

