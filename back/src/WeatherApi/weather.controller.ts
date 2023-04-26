import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async getWeather(
    @Param('city') city: string,
  ) {
    const weatherData = await this.weatherService.getWeather(city);
    return weatherData;
  }
}


