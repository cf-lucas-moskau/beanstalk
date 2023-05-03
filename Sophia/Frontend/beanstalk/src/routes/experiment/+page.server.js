import { error } from '@sveltejs/kit';
import { experiments } from '../../data';
import { consentForStudy, consentForData } from "../../stores/current-experiment"; 
import { goto } from '$app/navigation';


// @ts-ignore
export function load({ params }) {
	
	return {
		experiments
	};
}
