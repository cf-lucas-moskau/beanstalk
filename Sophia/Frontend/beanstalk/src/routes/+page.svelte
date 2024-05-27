<script>
	import { consentForStudy, consentForData } from "../stores/current-experiment";
	import { page } from '$app/stores';
	import {goto} from '$app/navigation';
  	import {experiments} from '../data.js';
	import {onDestroy, onMount} from 'svelte';
	import { trackPage } from "../stores/page-tracker.js";

	let invalidLink = false;
	let experiment;
	let eId;
	let eTitle;
	let eType;
	let eDescription;
	let ePitches;

	let startTime;
	let route;
	let clicks;

  	onMount (() => {
		const urlParams = new URLSearchParams(window.location.search);
		eId = urlParams.get('experiment');
		experiment = experiments.find(exp => exp.id === eId);
		console.log(eId);
		console.log(experiment?.title);
		//console.log(experiment);
		eTitle = experiment?.title;
		eType = experiment?.type;
		eDescription = experiment?.description;
		ePitches = experiment?.pitches;

		startTime = new Date();
		route = window.location.href;
		clicks = 0;
		document.addEventListener('click', () => (clicks++));
  	});

  	onDestroy(() => {
		const endTime = new Date();
		const timeSpent = endTime - startTime;
		trackPage(route, timeSpent, clicks);
  	});

</script>

<svelte:head>
	<title>Consent</title>
	<meta name="description" content="Consent" />
</svelte:head>

<h1>Are you interested in taking part in the research project
“Start-Up Investments”?</h1>

<h2><b>Purpose of the project</b></h2>
You are invited to participate in a research project where the main purpose is to examine the success factors of start-up pitches in an online-accelerator context. 

<h2><b>Which institution is responsible for the research project?</b></h2> 
The University of Oslo is responsible for the project (data controller). 

<h2><b>Why are you being asked to participate?</b></h2> 
You have been asked to participate in the project because you are a student at the University of Oslo and could potentially represent an investor in start-up projects like this one. 

<h2><b>What does participation involve for you?</b></h2>
As a participant in this study, you will be exploring a (hypothetical) investment platform that features nine different roasting companies, each with its unique offerings in coffee roasts. You will have the opportunity to click on each team's pitch and learn more about their beans and roasting techniques.
<br>
Your task will be to invest the available amount of 500 NOK into the start-ups that you find most promising. Depending on your investment decisions and the start-up’s performance, you will receive a specific return on investment or loss of investment for each start-up that you invested in. You don't have to invest the full amount if you don't want to, and any money that you don't invest or gain through your investments will serve as your compensation. Finally, you will receive feedback on how much money you gained or lost through your investments, and the amount will be paid out to you accordingly. (Add approx.. duration)
<br>
After investing, you will be asked to fill out a demographic survey. This survey will help us understand more about you and your investment preferences.

<h2><b>Participation is voluntary</b></h2> 
Participation in the project is voluntary. If you chose to participate, you can withdraw your consent at any time without giving a reason. All information about you will then be made anonymous. There will be no negative consequences for you if you chose not to participate or later decide to withdraw. 

<h2><b>Your personal privacy – how we will store and use your personal data</b></h2> 
We will only use your personal data for the purpose(s) specified here and we will process your personal data in accordance with data protection legislation (the GDPR).  
<br>
The data is accessed and used by the Friendship at Work research group at the Department of Psychology, University of Oslo. The principal investigators are M.Sc. Sophia Humps (project owner; sophia.humps@psykologi.uio.no), and Associate Professor Dr. Nina M. Junker (supervisor; n.m.junker@psykologi.uio.no). 
We will store the data in restricted data storage at the University of Oslo, and the access will be limited and controlled per user. Individual participants will not be recognisable in publications.
<br>
What will happen to your personal data at the end of the research project? 
The planned end date of the project is 30. July 2026. After the project, the data will be anonymised and will be accessible as open data in the storage of the Open Science Framework (OSF), with the data stored on a German server. Any identifiable information will be deleted. 

<h2><b>Your rights</b></h2> 
So long as you can be identified in the collected data, you have the right to:<br>
-	access the personal data that is being processed about you <br>
-	request that your personal data is deleted<br>
-	request that incorrect personal data about you is corrected/rectified<br>
-	receive a copy of your personal data (data portability), and<br>
-	send a complaint to the Norwegian Data Protection Authority regarding the processing of your personal data

<h2><b>What gives us the right to process your personal data?</b></h2> 
We will process your personal data based on your consent. <br>

Based on an agreement with the University of Oslo, The Data Protection Services of Sikt – Norwegian Agency for Shared Services in Education and Research has assessed that the processing of personal data in this project meets requirements in data protection legislation. 

<h2><b>Where can I find out more?</b></h2>
If you have questions about the project, or want to exercise your rights, contact: <br>
•	University of Oslo via M.Sc. Sophia Humps (project owner): sophia.humps@psykologi.uio.no or Associate Professor Dr. Nina M. Junker (project supervisor): n.m.junker@psykologi.uio.no <br>
•	Our Data Protection Officer, Roger Markgraf-Bye: personvernombud@uio.no <br>

If you have questions about how data protection has been assessed in this project by Sikt, contact:<br>
•	email: (personverntjenester@sikt.no) or by telephone: +47 73 98 40 40.<br>
<br>


Yours sincerely,<br>
<br>


Sophia Humps (Project Leader) and Nina Junker (Supervisor)

<br>
<hr>
<br>
<h1>Consent Form for {eTitle}</h1>

<h2><b>Type of experiment: {eType}</b></h2>

<p>TODO: What else is "consent" data??</p>


<label>I have received and understood information about the project “Start-up Investments” and have been given the opportunity to ask questions.</label>
<div>
  <input type="checkbox" name="consent" checked={$consentForStudy} on:click={() => {
	consentForStudy.set(!$consentForStudy)
  }}>
  <label for="consent participation">I give consent to participate in the online investment study*</label><br>
  <input type="checkbox" name="occupation" checked={$consentForData} on:click={() => {
	consentForData.set(!$consentForData)
  }}>
  <label for="consent personal data">I give consent for my personal data to be processed until the end of the project.* </label><br>
</div>
<div class="button-container">
	<button class="styled-button" disabled={!$consentForStudy || !$consentForData}
		on:click={() => {
			if ($page.url.searchParams.has('experiment')) {
				let targetRoute = '/experiment/' + $page.url.searchParams.get('experiment') + '/explanation'
				goto(targetRoute);
			} else {
				invalidLink = true;
			}
		}}
	>
		Continue
	  </button>
</div>
{#if invalidLink}
	<div class="invalid-div">
		<p>Your Link seems to be invalid, please contact support</p>
	</div>
{/if}

<style>
	.invalid-div{
		background-color: lightcoral;
		border-radius: 10px;
		margin-top: 20px;
		text-align: center;
	}
	.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
	.styled-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #1e88e5;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
	margin-top: 40px;
    transition: background-color 0.3s ease;
  }

  .styled-button:hover {
    background-color: #1565c0;
  }

  .styled-button:disabled {
    background-color: gray;
	opacity: 0.5;
	cursor: not-allowed;
  }

  .styled-button:focus {
    outline: none;
  }

  .styled-button:active {
    background-color: #0d47a1;
  }
</style>