const key = 'WM4SYLzSIlIKVMNt8QjQffGb4uPDDNPI';

export const fetchStories = (section:string) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
    .then(response => response.json())
}