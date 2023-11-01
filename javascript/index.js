window.onload = function() {
    const url = "https://newsapi.org/v2/everything";
    const apiKey = "6458b118fc1149fb9a38c6c24bcb2757";

    const response = fetch(`${url}?${new URLSearchParams({
        q: 'brazil dev',
        from: '2023-10-01',
        sortBy: 'publishedAt',
        apiKey: apiKey
    })}`,{
        method: 'GET'
    })
    const result = await response.json();
    
    console.log(response)
}