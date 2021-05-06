module.exports = ({ name, reportId, data }) => {
	const today = new Date();
	return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Arial', 'Helvetica';
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
          <h1>Congestions Report</h1>
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                         <tr>
                            <td>
                               Date: ${`${today.getDate()}. ${
								today.getMonth() + 1
							}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                                User: ${name}
                            </td>
                            <td>
                               Document Id: ${reportId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tbody>
                ${data.map((congestion) => {
					const dt = new Date(congestion.date);
					const dateF = `${(dt.getMonth() + 1)
						.toString()
						.padStart(2, '0')}/${dt
						.getDate()
						.toString()
						.padStart(2, '0')}/${dt
						.getFullYear()
						.toString()
						.padStart(4, '0')} ${dt
						.getHours()
						.toString()
						.padStart(2, '0')}:${dt
						.getMinutes()
						.toString()
						.padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
					return `<tr><td style="font-size:12px;">${congestion.coords}</td><td style="text-align: center;">${congestion.description}</td><td>${dateF}</td></tr>`;
				})}
                </tbody>
             </table>
             <br />
          </div>
       </body>
    </html>
    `;
};
