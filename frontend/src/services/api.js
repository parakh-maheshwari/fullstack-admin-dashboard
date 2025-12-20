const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export async function getProjects() {
  const res = await fetch(`${BASE_URL}/dashboard/projects`);
  return res.json();
}

export async function getClients() {
  const res = await fetch(`${BASE_URL}/dashboard/clients`);
  return res.json();
}

export async function sendContact(data) {
  const res = await fetch(`${BASE_URL}/dashboard/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function subscribeEmail(email) {
  const res = await fetch(`${BASE_URL}/dashboard/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.json();
}


export async function addProject(data) {
  const res = await fetch(`${BASE_URL}/admin/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function addClient(data) {
  const res = await fetch(`${BASE_URL}/admin/clients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getContacts() {
  const res = await fetch(`${BASE_URL}/admin/contacts`);
  return res.json();
}

export async function getSubscribers() {
  const res = await fetch(`${BASE_URL}/admin/subscribers`);
  return res.json();
}
