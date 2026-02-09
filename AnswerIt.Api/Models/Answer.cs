using System.Text.Json.Serialization;

namespace AnswerIt.Api.Models;

public class Answer
{
    [JsonPropertyName("answer")]
    public string Text { get; set; } = string.Empty;

    [JsonPropertyName("result")]
    public bool Result { get; set; }
}
