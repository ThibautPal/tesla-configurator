import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ConfigurationService } from '../services/configuration/configuration.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard {

	constructor(
		private router: Router,
		private configurationService: ConfigurationService
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url.replace('/', '')
		let hasRight: boolean = this.configurationService.hasRight(url)
		if (!hasRight) {
			this.router.navigate(['/step1']);
		}
		return hasRight
	}
}