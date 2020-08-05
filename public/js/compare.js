function init(){
	let cellHeight = $('#rootcell').width();
	$('.comparerow').height(cellHeight);

	$('.countrieslist').append('<option>Add a country</option>');
	countries.forEach(function(d){
		$('.countrieslist').append('<option value="'+d['country id']+'">'+d['country name']+'</option>');
	});

	$('.countrieslist').on('change',function(d){
		addIcons(this.value,$(this).attr('data-id'));
	});

	$('.lensbutton').on('click',function(d,i){
		let id = '.lens'+ $(this).attr('data');
		$('.lensdetails').hide();
		$(id).show();
		$('.lensbutton').removeClass('activelens');
		$(this).addClass('activelens');
	});

	let id = '.lensorientation';
	
	$('.lensdetails').hide();
	$(id).show();

	addIcons(12,1);
	$('#countrylist1').val(12);
}

function addIcons(countryID,row){
	let cellHeight = $('#rootcell').width();
	orientationDataCut = getData(countryID,orientationData);
	if(orientationDataCut!=false){
		$('#compare'+row+'1').html('');
		generateOrientationAfter('#compare'+row+'1',orientationDataCut,1,1,0,true,false);
	}

	diffusionDataCut = getData(countryID,diffusionData);
	if(diffusionDataCut!=false){
		$('#compare'+row+'2').html('');
		generateDiffusion('#compare'+row+'2',diffusionDataCut,cellHeight,cellHeight,1,1,true,false,3);
	}

	distanceDataCut = getData(countryID,distanceData);
	if(distanceDataCut!=false){
		$('#compare'+row+'3').html('');
		generateDistance('#compare'+row+'3',distanceDataCut,1,1,3,true);
	}

	attractionDataCut = getData(countryID,attractionData);
	if(attractionDataCut!=false){
		$('#compare'+row+'4').html('');
		generateAttraction('#compare'+row+'4',attractionDataCut,1,1,6,true);
	}
}

function getData(id,dataSet){
	let found = false;
	dataSet.forEach(function(d){
		if(d['country_id'] == id){
			found = [d];
		}
	});
	return found;
}

init();