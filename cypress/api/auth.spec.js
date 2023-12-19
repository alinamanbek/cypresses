

describe('Login Api Suite', () => {
    it('Authorized to page and client', () => {
      cy.request({
        method: 'POST',
        url: 'http://167.114.201.175:5001/Token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer 40u6od7r9f-SFhad4C1CHcT81uemXThW15rRHhq273SF46qu7d1qzn-Xv5MIvF100cvVH9LlnwPy1sQ-NRcIe7_2leLoE3y5lJNn78mMeaOmWbxbxVxoGre93Ujd2R4_c-d4gh56c4XfgsmQts6k69gfIJhXZDLwZXicznPx8timp63AqZFD60tKd2EOhWEt6BZypb1OiU8PH1MCyLxKihWdhqdR-hh0AY5JUoGkbFSRKGsiCCilonr3BRXIEu2dpCM399W_kp1jbSdz229ZMiFueKpMI1shJnWpQpFxkVWQs7i-TXMxbzGhCcAqMU1WetFT3_bBLQExOtNG17wlrIVBhdyCBSj3_j8Io28hnOcl6_ChTKzT4hxPOdIhIioBgidAgjYR0iEot6o2dQJ8mRxZyCq8xMgRr7LGeWO_XQ8QUnGwDJj9pHLKm2rycqtOFa8yYhu7F7pbwpfO0nLJqqgKGzTEWrNDDJrHCHaq_W6OkLDPgcSD-1wpR4M662ja',
        },
        form: true,
        body: {
          grant_type: 'password',
          username: 'Admin',
          password: 'Admin@Navi',
        },
      }).then((response) => {
        // Add your assertions here
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('access_token');
        // Add more assertions as needed
      });
    });
  });
  