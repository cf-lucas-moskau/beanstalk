
<script>
  let formSubmitted = false;

  let experience;

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    fetch('/api/questionnaire', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    })
    .then(response => {
      formSubmitted = true;
    })
    .catch(error => {
      console.error(error);
      // Handle any errors that occur
    });
  }
</script>

<h1>Questionnaire</h1>

{#if !formSubmitted}
<form on:submit={handleSubmit}>
  <label>
    How old are you?
    <input type="text" name="age" required />
  </label> <br>
<br>

  <label>
    What is your gender?
    <select name="gender" required>
      <option value="">Please select</option>
      <option value="woman">Woman</option>
      <option value="man">Man</option>
      <option value="nonbinary">Non-binary/ third gender</option>
    </select>
  </label> <br>
  <br>

  <label>
    Which of the following best describes your ethnic identity?
    <select name="ethnicity" required>
      <option value="">Please select</option>
      <option value="black">Black, African, Caribbean</option>
      <option value="hispanic">Hispanic, Latino/a, Chicano/a</option>
      <option value="eastasian">East Asian</option>
      <option value="southasian">South Asian</option>
      <option value="westasian">West Asian</option>
      <option value="middleeastern">Middle Eastern, Arab</option>
      <option value="aboriginal">Aboriginal, Indigenous, Native</option>
      <option value="mixed">Mixed or Multiple Ethnic Groups</option>
      <option value="other">Other</option>
    </select>
  </label> <br>
  <br>

  <label>
    What is your highest educational achievement?
    <select name="education" required>
      <option value="">Please select</option>
      <option value="undergrad">Undergraduate degree (e.g., BSc, BA)</option>
      <option value="masters">Master's degree (e.g., MSc, MPhil)</option>
      <option value="phd">PhD, PsyD</option>
    </select>
  </label> <br>
  <br>

  <label>What is your current occupation?</label>
<div>
  <input type="checkbox" name="occupation" value="Employed full-time">
  <label for="Employed full-time">Employed full-time</label><br>
  <input type="checkbox" name="occupation" value="Employed part-time">
  <label for="Employed part-time">Employed part-time</label><br>
  <input type="checkbox" name="occupation" value="Self-employed">
  <label for="Self-employed">Self-employed</label><br>
  <input type="checkbox" name="occupation" value="Unemployed">
  <label for="Unemployed">Unemployed</label><br>
  <input type="checkbox" name="occupation" value="Student">
  <label for="Student">Student</label><br>
  <input type="checkbox" name="occupation" value="Retired">
  <label for="Retired">Retired</label><br>
  <input type="checkbox" name="occupation" value="Other">
  <label for="Other">Other</label>
</div>
<br>
<br>


  <label>
  What is your approximate annual income before taxes?
  <select name="annual_income">
    <option value="">Please select</option>
    <option value="Less than 200,000 NOK">Less than 200,000 NOK</option>
    <option value="200,000 - 400,000 NOK">200,000 - 400,000 NOK</option>
    <option value="400,000 - 600,000 NOK">400,000 - 600,000 NOK</option>
    <option value="600,000 - 800,000 NOK">600,000 - 800,000 NOK</option>
    <option value="800,000 - 1,200,000 NOK">800,000 - 1,200,000 NOK</option>
    <option value="More than 1,200,000 NOK">More than 1,200,000 NOK</option>
  </select>
</label>
<br>
<br>

  <label>On a scale from 1 (extremely risk-averse) to 7 (extermely risk-tolerant), how would you rate your willingness to take financial risks?</label>
<div class="likert">
  <span>1</span>
  <input type="radio" name="risk_tolerance" value="1">
  <input type="radio" name="risk_tolerance" value="2">
  <input type="radio" name="risk_tolerance" value="3">
  <input type="radio" name="risk_tolerance" value="4">
  <input type="radio" name="risk_tolerance" value="5">
  <input type="radio" name="risk_tolerance" value="6">
  <input type="radio" name="risk_tolerance" value="7">
  <span>7</span>
</div>
<br>
<br>



  


  <button type="submit">Submit</button>
</form>
{:else}
  <p>Thank you for submitting the questionnaire!</p>
{/if}

