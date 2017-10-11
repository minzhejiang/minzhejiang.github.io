var thumbnailSpacing=15;

$(document).ready(function(){
	var bio=['Iris van Herpen is a Dutch fashion designer who is widely recognized as one of fashion’s most talented and forward-thinking creators who continuously pushes the boundaries of fashion design. Since her first show in 2007 van Herpen has been preoccupied with inventing new forms and methods of sartorial expression by combining the most traditional and the most radical materials and garment construction methods into her unique aesthetic vision. She calls this design ethos “New Couture.”' , 'Van Herpen is often hailed as a pioneer in utilizing 3D printing as a garment construction technique, and as an innovator who is comfortable with using technology as one of the guiding principles in her work because of its sculptural nature and unfamiliar form. The designer’s intent is to blend the past and the future into a distinct version of the present by fusing technology and traditional Couture craftsmanship.', 'Her singular vision combined with the complexity of her creations has made van Herpen a fixture on the Paris Haute Couture calendar, where she has shown since January 2011.', 'Van Herpen’s work has been featured in various museum exhibitions, including a major retrospective that is touring the United States since 2015, beginning with a six-month long run at the High Museum of Art in Atlanta. Six of her dresses were acquired by the Metropolitan Museum of Art in New York and seven of her works were exhibited in its highly successful 2016 “Manus x Machina: Fashion in an Age of Technology” show. In addition to the above, van Herpen’s creations have been exhibited at the Victoria & Albert Museum in London, and the Cooper Hewitt museum in New York, and the Palais de Tokyo in Paris, among others.']
	var bioText=choice(bio);
	$('p').text(bioText);

	var aeriform=['photos/aeriform1_thumbnail.jpg','photos/aeriform2_thumbnail.jpg','photos/aeriform3_thumbnail.jpg', 'photos/aeriform4_thumbnail.jpg'];
	var aeriformImg=choice(aeriform);
	$('#aeriform').attr('src',aeriformImg);

	var between=['photos/between1_thumbnail.jpg','photos/between2_thumbnail.jpg','photos/between3_thumbnail.jpg', 'photos/between4_thumbnail.jpg'];
	var betweenImg=choice(between);
	$('#between').attr('src',betweenImg);

	var seijaku=['photos/seijaku1_thumbnail.jpg','photos/seijaku2_thumbnail.jpg','photos/seijaku3_thumbnail.jpg', 'photos/seijaku4_thumbnail.jpg'];
	var seijakuImg=choice(seijaku);
	$('#seijaku').attr('src',seijakuImg);

	var lucid=['photos/lucid1_thumbnail.jpg','photos/lucid2_thumbnail.jpg','photos/lucid3_thumbnail.jpg', 'photos/lucid4_thumbnail.jpg'];
	var lucidImg=choice(lucid);
	$('#lucid').attr('src',lucidImg);

	var wilderness=['photos/wilderness1_thumbnail.jpg','photos/wilderness2_thumbnail.jpg','photos/wilderness3_thumbnail.jpg', 'photos/wilderness4_thumbnail.jpg'];
	var wildernessImg=choice(wilderness);
	$('#wilderness').attr('src',wildernessImg);

});


function choice(arr){
	return arr[Math.floor(Math.random()*arr.length)]
}

