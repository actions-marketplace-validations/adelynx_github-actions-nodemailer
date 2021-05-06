# Github Actions Nodemailer

| **Title** | Github Actions Nodemailer                                            |  
|:--------------------|:----------------------------------------------------------------------|  
| **Created** | 6<sup>th</sup> May 2021    
| **Project** | Websites                                   
| **Author** | Adel Kedjour                                                                                                 
| **Version** | [![GitHub version](https://badge.fury.io/gh/adelynx%2Fgithub-actions-nodemailer.svg)](https://badge.fury.io/gh/adelynx%2Fgithub-actions-nodemailer)
| **Updated** | 6<sup>th</sup> May 2021                                                                   
| **Contacts** | Adel Kedjour - adel@kedjour.com
| **Website** | [http://www.awidel.com][1]
| **Description** | Github Actions to send email notifications using Nodemailer.   
| **License** | The scripts and documentation in this project are released under the [MIT License][2] 

# Available Inputs

This action sends an email to recipients list when a workflow finishes.

| Inputs   | Descreption|  Required |
|----------|:-------------:|-------:|
| `host` |  SMTP server address | `true` |
| `port` |  SMTP server port| `true` |
| `secure` |  Whether this connection use TLS (default is true if SMTP server port is 465)| `false` |
| `username` |  Authenticate as this user to SMTP server | `true` |
| `password` |  Authenticate with this password to SMTP server | `true` |
| `subject` |  Subject of mail message | `true` |
| `to` |  Recipients mail addresses (separated with comma) | `true` |
| `from` |  Full name of mail sender (might be with an email address specified in <>) | `true` |
| `body` |  Body of mail message (might be a filename plain text or html) | `true` |
| `cc` |  Carbon copy recipients (separated with comma) | `false` |
| `bcc` |  Blind carbon copy recipients (separated with comma) | `false` |
| `reply_to` |  An email address that will appear on the Reply-To field | `false` |


## Usage

```yml
- name: Notify Me on Success
  uses: adelynx/github-actions-nodemailer@main
  with:  
    # Required mail server address:              
    host: 'smtp.mailtrap.io'
    # Required mail server port:
    port: 2525
    # Required mail server username:
    username: '${{secrets.MAIL_USERNAME}}'
    # Required mail server password:
    password: '${{secrets.MAIL_PASSWORD}}'
    # Required mail server from:
    from: 'Adel Kedjour <adel@kedjour.com'
    # Required mail server to:
    to: isaac@kedjour.com,dania@kedjour.com
    # Required mail subject:
    subject: 'Github Actions job result'
    # Optional plain text body:
    body: 'Build job of ${{github.repository}} completed successfully!'
    # Or HTML body
    body: '<p>Build job of ${{github.repository}} completed successfully!</p>'
    # Optional carbon copy recipients:
    cc: mom@kedjour.com,dad@kedjour.com
    # Optional blind carbon copy recipients:
    bcc: brother@kedjour.com,sister@kedjour.com
    # Optional recipient of the email response:
    reply_to: me@kedjour.com
```

## More

For more usage of `Nodemailer`, please see [Official Document][3].


[1]:https://www.awidel.com
[2]:https://github.com/adelynx/github-actions-nodemailer/blob/main/LICENSE
[3]:https://nodemailer.com/usage/