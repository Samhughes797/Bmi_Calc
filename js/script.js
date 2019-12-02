function calculateBmi() 
{
    //var weight = document.bmiForm.weight.value;
    //getElementById('');
    let weight = $("#weight").val();
    //var height = document.bmiForm.height.value
    let height = $("#height").val();

    

    if (weight > 0 && height > 0) 
    {
        let finalBmi = weight/(height/100*height/100)
        $("#bmi").val(finalBmi);
        console.log(finalBmi);

        switch (true) 
        {
            case (finalBmi < 18.5):
                $("#Feedback").val("That you are too thin");
                break;

            case (finalBmi > 18.5 && finalBmi < 25):
                $("#Feedback").val("That you are overweight");
                break;

            default:
                $("#Feedback").val("That you are healthy");

        }
	}
         else 
        {
            //alert("Please Fill in everything correctly")
            $('#Feedback').html("<strong>This Means:</strong> Please Fill in everything correctly");
        }
}