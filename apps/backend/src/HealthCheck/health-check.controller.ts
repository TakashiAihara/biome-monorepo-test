import { Controller, Get } from "@nestjs/common";
import { HealthCheck, type HealthCheckService } from "@nestjs/terminus";
import type { ServiceHealth } from "..";

@Controller()
export class HealthController {
	constructor(private readonly health: HealthCheckService) {}

	@HealthCheck()
	@Get()
	async check(): Promise<ServiceHealth> {
		return this.health.check([
			async () => {
				return { process: { status: "up" } };
			},
		]);
	}
}
