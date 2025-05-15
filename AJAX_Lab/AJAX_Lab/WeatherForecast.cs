namespace AJAX_Lab
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        public int Wind { get; set; }
        public int Wet { get; set; }

        public string? Summary { get; set; }
    }
}
