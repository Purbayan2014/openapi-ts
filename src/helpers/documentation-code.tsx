export const nodejs = `const axios = require("axios");
const options = {
    method: 'POST',
    url: 'https://plagarismapi.com/api/v1/plagarism',
    params: {
      text1: 'First text',
      text2: 'Second text'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests
url = 'https://plagarismapi.com/api/v1/plagarism'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'
headers = {
    'Authorization': api_key
}
payload = {
    'text1': text1,
    'text2': text2
}
response = requests.post(url, headers=headers, json=payload)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`

export const cpp = `#include <iostream>
#include <curl/curl.h>
#include <string>

// Callback function to receive response from the server
static size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
    ((std::string*)userp)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

int main() {
    CURL* curl;
    CURLcode res;
    std::string response;

    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();
    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "https://plagarismapi.com/api/v1/plagarism");
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, "text1=First%20text&text2=Second%20text");
        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        struct curl_slist* headers = NULL;
        headers = curl_slist_append(headers, "Authorization: YOUR_API_KEY");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

        res = curl_easy_perform(curl);
        if(res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        }

        curl_easy_cleanup(curl);
        curl_slist_free_all(headers);
    }

    curl_global_cleanup();

    // Response from the server
    std::cout << "Response: " << response << std::endl;

    return 0;
}`

export const java = `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main {

    public static void main(String[] args) {
        try {
            URL url = new URL("https://plagarismapi.com/api/v1/plagarism");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            String postData = "text1=First%20text&text2=Second%20text";
            conn.getOutputStream().write(postData.getBytes("UTF-8"));

            conn.setRequestProperty("Authorization", "YOUR_API_KEY");

            int responseCode = conn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                System.out.println("Response: " + response.toString());
            } else {
                System.out.println("Request failed with response code: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`

export const graphql = `import json
import requests

# Set GraphQL endpoint URL
graphql_endpoint = 'https://plagarismapi.com/graphql'

# Set your API key
api_key = 'YOUR_API_KEY'

# Set query and variables
query = '''
query ($text1: String!, $text2: String!) {
  checkPlagiarism(text1: $text1, text2: $text2)
}
'''
variables = {
  'text1': 'First text',
  'text2': 'Second text'
}

# Set headers with API key
headers = {
  'Authorization': api_key
}

# Set request payload
data = {
  'query': query,
  'variables': variables
}

# Make GraphQL request
response = requests.post(graphql_endpoint, json=data, headers=headers)
if response.status_code == 200:
    data = json.loads(response.text)
    print('Response:', data['data'])
else:
    print('Error:', response.status_code, response.text)
`

export const rust = `extern crate reqwest;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Set endpoint URL
    let url = "https://plagarismapi.com/api/v1/plagarism";

    // Set request payload
    let payload = r#"{"text1": "First text", "text2": "Second text"}"#;

    // Create HTTP client
    let client = reqwest::blocking::Client::new();

    // Send HTTP POST request
    let response = client.post(url)
        .body(payload)
        .header("Authorization", "YOUR_API_KEY")
        .header("Content-Type", "application/json")
        .send()?;

    // Check response status code
    if response.status().is_success() {
        // Read response body
        let body = response.text()?;
        println!("Response: {}", body);
    } else {
        println!("Error: {} {:?}", response.status(), response.text()?);
    }

    Ok(())
}`

// export const bash = `#!/bin/bash

// # Set endpoint URL
// url="https://plagarismapi.com/api/v1/plagarism"

// # Set request payload
// payload='{"text1": "First text", "text2": "Second text"}'

// # Set request headers
// headers=(
//   "-H" "Authorization: YOUR_API_KEY"
//   "-H" "Content-Type: application/json"
// )

// # Send HTTP POST request
// response=$(curl -X POST -s -H ''${headers[@]}'' -d "$payload" "$url")

// # Check response status code
// if [[ $(curl -s -o /dev/null -w "%{http_code}" "$url") == "200" ]]; then
//   echo "Response: $response"
// else
//   echo "Error: $response"
// fi`