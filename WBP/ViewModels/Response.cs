namespace WBP.ViewModels
{
    public class Response
    {
        public Response() { }

        public bool success { get; set; }
        public string message { get; set; }
        public object? item { get; set; }
        public List<object> items { get; set; }
        public byte[] file { get; set; }
    }
}
