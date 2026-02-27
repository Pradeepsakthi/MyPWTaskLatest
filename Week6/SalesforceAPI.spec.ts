import test from "@playwright/test";

let accessToken: any;
let InstanceUrl: any;
let sf_Id: any;

test("Generate the token", async ({ request }) => {
  const reqToken = await request.post(
    "https://login.salesforce.com/services/oauth2/token",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      form: {
        grant_type: "password",
        username: "manikandanleo4922@agentforce.com",
        password: "India@2026",
        client_id:
          "3MVG9dAEux2v1sLs_5LgrWbWWJbMYKRgBajBibwGyik0pC_tXNFGsk6aV8h1owvGj6hsaxRWhzGX5WP1O87h5",
        client_secret:
          "EE7E666EF8204C869125AC8160C78B0F93277C544B84F8B89A0D59AD9FB3AD1C",
      },
    },
  );

  const res = await reqToken.json();
  accessToken = res.access_token;
  InstanceUrl = res.instance_url;
  console.log(accessToken + " " + InstanceUrl);
});

test("SF_Lead", async ({ request }) => {
  const response = await request.post(
    `${InstanceUrl}/services/data/v65.0/sobjects/Lead`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        firstname: "JK",
        lastname: "DD",
        company: "Hcl",
      },
    },
  );

  const res = await response.json();
  sf_Id = res.id;
  console.log(sf_Id);
});
