document.getElementById("btn-submit").addEventListener("click",function(){
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var gstr = JSON.parse(document.getElementById("txtArea").value);
    var filingPeriod = "";
    if(gstr.filing_typ == "M"){
        filingPeriod = "month"
    }else{filingPeriod = "quater ended in month"}
 
    //For B2B Transactions   
    
    document.getElementById("b2bHeading").innerHTML = "GSTR 1/4A B2B Transactions for GSTIN " + gstr.gstin + " holder for the " + filingPeriod + " of " + months[parseInt(gstr.fp.substring(0,2))-1] + "-" + gstr.fp.substring(2,6) + ".";  
    var b2b = gstr["b2b"];
    var b2bArr = [];
    var html = ""
    
    var pos = ['JAMMU AND KASHMIR','HIMACHAL PRADESH','PUNJAB','CHANDIGARH','UTTARAKHAND','HARYANA','DELHI','RAJASTHAN','UTTAR PRADESH','BIHAR','SIKKIM','ARUNACHAL PRADESH','NAGALAND','MANIPUR','MIZORAM','TRIPURA','MEGHLAYA','ASSAM','WEST BENGAL','JHARKHAND','ODISHA','CHATTISGARH','MADHYA PRADESH','GUJARAT','DAMAN AND DIU','DADRA AND NAGAR HAVELI','MAHARASHTRA','ANDHRA PRADESH','KARNATAKA','GOA','LAKSHWADEEP','KERALA','TAMIL NADU','PUDUCHERRY','ANDAMAN AND NICOBAR ISLANDS','TELANGANA','ANDHRA PRADESH'];
    for(var i = 0; i < b2b.length; i++){
        
        var gstin = b2b[i]["ctin"];
        var invoices = b2b[i]["inv"];
        for(var j = 0; j < invoices.length; j++){
            var items = invoices[j]["itms"];
            
            for(var k = 0; k < items.length; k++){
                html = html + "<tr>"
                // b2bArr.push([gstin,items[k]["itm_det"]["txval"],items[k]["itm_det"]["rt"],items[k]["itm_det"]["csamt"],items[k]["itm_det"]["samt"],items[k]["itm_det"]["camt"]]);
                var item = items[k]["itm_det"];
                
                html = html + "<th>" + gstin + "</th>"
                html = html + "<th>" + invoices[j]["inum"] + "</th>"
                html = html + "<th>" + invoices[j]["idt"] + "</th>"
                html = html + "<th>" + pos[parseInt(invoices[j]["pos"])-1] + "</th>"
                html = html + "<th>" + invoices[j]["val"] + "</th>"
                html = html + "<th>" + invoices[j]["inv_typ"] + "</th>"
                html = html + "<th>" + invoices[j]["rchrg"] + "</th>"
                html = html + "<th>" + item["txval"] + "</th>"
                html = html + "<th>" + item["rt"] + "%" + "</th>"
                if(!isNaN(invoices[j]["diff_percent"])){
                    html = html + "<th>" + (invoices[j]["diff_percent"]*100) + "%" + "</th>"
                }else{
                    html = html + "<th>"+ "</th>"
                }
                

                if(item["iamt"] != undefined){
                    html = html + "<th>" + item["iamt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }
                if(item["camt"] != undefined){
                    html = html + "<th>" + item["camt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }
                if(item["samt"] != undefined){
                    html = html + "<th>" + item["samt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }


                html = html + "</tr>"
                               
            }    
            
            
        }



    }


    document.getElementById("tblhead_gstrB2B").innerHTML = "<th>GSTIN</th><th>Invoice No.</th><th>Invoice Date</th><th>POS</th><th>Invoice Value</th><th>Invoice Type</th><th>Reverse Charge</th><th>Taxable Value</th><th>Rate</th><th>Applicable % of Tax</th><th>IGST</th><th>CGST</th><th>SGST</th>"
    document.getElementById("table1").innerHTML = html;
    
    //For B2B Amendment list
    document.getElementById("b2baHeading").innerHTML = "GSTR 1/4A B2B Amendments for GSTIN " + gstr.gstin + " holder for the " + filingPeriod + " of " + months[parseInt(gstr.fp.substring(0,2))-1] + "-" + gstr.fp.substring(2,6) + ".";
    var b2ba = gstr["b2ba"];
    var html=""
    
    for(var i = 0; i < b2ba.length; i++){
        
        var gstin = b2ba[i]["ctin"];
        var invoices = b2ba[i]["inv"];
        for(var j = 0; j < invoices.length; j++){
            var items = invoices[j]["itms"];
            
            for(var k = 0; k < items.length; k++){
                html = html + "<tr>"
                // b2bArr.push([gstin,items[k]["itm_det"]["txval"],items[k]["itm_det"]["rt"],items[k]["itm_det"]["csamt"],items[k]["itm_det"]["samt"],items[k]["itm_det"]["camt"]]);
                var item = items[k]["itm_det"];
                
                html = html + "<th>" + gstin + "</th>"
                html = html + "<th>" + invoices[j]["inum"] + "</th>"
                html = html + "<th>" + invoices[j]["idt"] + "</th>"
                html = html + "<th>" + pos[parseInt(invoices[j]["pos"])-1] + "</th>"
                html = html + "<th>" + invoices[j]["val"] + "</th>"
                html = html + "<th>" + invoices[j]["inv_typ"] + "</th>"
                html = html + "<th>" + invoices[j]["rchrg"] + "</th>"
                html = html + "<th>" + item["txval"] + "</th>"
                html = html + "<th>" + item["rt"] + "%" + "</th>"

                if(!isNaN(invoices[j]["diff_percent"])){
                    html = html + "<th>" + (invoices[j]["diff_percent"]*100) + "%" + "</th>"
                }else{
                    html = html + "<th>"+ "</th>"
                }

                if(item["iamt"] != undefined){
                    html = html + "<th>" + item["iamt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }
                if(item["camt"] != undefined){
                    html = html + "<th>" + item["camt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }
                if(item["samt"] != undefined){
                    html = html + "<th>" + item["samt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }


                html = html + "</tr>"
                               
            }    
            
            
        }



    }
    document.getElementById("tblhead_gstrB2Ba").innerHTML = "<th>GSTIN</th><th>Invoice No.</th><th>Invoice Date</th><th>POS</th><th>Invoice Value</th><th>Invoice Type</th><th>Reverse Charge</th><th>Taxable Value</th><th>Rate</th><th>Applicable % of Tax</th><th>IGST</th><th>CGST</th><th>SGST</th>"
    document.getElementById("table3").innerHTML = html;

    //For B2CL list
    document.getElementById("b2clHeading").innerHTML = "GSTR 1/4A B2CL Invoices for GSTIN " + gstr.gstin + " holder for the " + filingPeriod + " of " + months[parseInt(gstr.fp.substring(0,2))-1] + "-" + gstr.fp.substring(2,6) + ".";
    var b2cl = gstr["b2cl"];
    var html=""
    
    for(var i = 0; i < b2cl.length; i++){
        
        var gstin = b2cl[i]["ctin"];
        var invoices = b2cl[i]["inv"];
        for(var j = 0; j < invoices.length; j++){
            var items = invoices[j]["itms"];
            
            for(var k = 0; k < items.length; k++){
                html = html + "<tr>"
                // b2bArr.push([gstin,items[k]["itm_det"]["txval"],items[k]["itm_det"]["rt"],items[k]["itm_det"]["csamt"],items[k]["itm_det"]["samt"],items[k]["itm_det"]["camt"]]);
                var item = items[k]["itm_det"];
                
                html = html + "<th>" + gstin + "</th>"
                html = html + "<th>" + invoices[j]["inum"] + "</th>"
                html = html + "<th>" + invoices[j]["idt"] + "</th>"
                html = html + "<th>" + pos[parseInt(invoices[j]["pos"])-1] + "</th>"
                html = html + "<th>" + invoices[j]["val"] + "</th>"
                if( invoices[j]["inv_typ"] != undefined){
                    html = html + "<th>" +  invoices[j]["inv_typ"] + "</th>"
                }else{
                	html = html + "<th>" + "</th>"
                }

                
                
                html = html + "<th>" + item["txval"] + "</th>"
                html = html + "<th>" + item["rt"] + "%" + "</th>"

                if(!isNaN(invoices[j]["diff_percent"])){
                    html = html + "<th>" + (invoices[j]["diff_percent"]*100) + "%" + "</th>"
                }else{
                    html = html + "<th>"+ "</th>"
                }

                if(item["iamt"] != undefined){
                    html = html + "<th>" + item["iamt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }
                if(item["camt"] != undefined){
                    html = html + "<th>" + item["camt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }
                if(item["samt"] != undefined){
                    html = html + "<th>" + item["samt"] + "</th>"
                }else{
                	html = html + "<th>" + 0 + "</th>"
                }


                html = html + "</tr>"
                               
            }    
            
            
        }



    }
    document.getElementById("tblhead_gstrb2cl").innerHTML = "<th>GSTIN</th><th>Invoice No.</th><th>Invoice Date</th><th>POS</th><th>Invoice Value</th><th>Invoice Type</th><th>Taxable Value</th><th>Rate</th><th>Applicable % of Tax</th><th>IGST</th><th>CGST</th><th>SGST</th>"
    document.getElementById("table4").innerHTML = html;




    //For Credit Note Transaction

    document.getElementById("cnHeading").innerHTML = "GSTR 1/4A Credit Notes Transactions for GSTIN " + gstr.gstin + " holder for the " + filingPeriod + " of " + months[parseInt(gstr.fp.substring(0,2))-1] + "-" + gstr.fp.substring(2,6) + ".";
    var htmlcn = ""
    
    for(var i = 0; i < gstr.cdnr.length; i++){
        var customer = gstr.cdnr[i];
        var gstin = customer.ctin;
        
        var notes = customer.nt
        for(var j = 0; j < notes.length; j++){
            var note = notes[j];
            var items = note.itms
            
            for(var k = 0; k < items.length; k++){
                htmlcn = htmlcn + "<tr>";
                var item = items[k].itm_det;
                htmlcn =  htmlcn + "<th>" + gstin + "</th>"
                htmlcn =  htmlcn + "<th>" + note.nt_num + "</th>"
                htmlcn =  htmlcn + "<th>" + note.nt_dt + "</th>"
                htmlcn =  htmlcn + "<th>" + note.inum + "</th>"
                htmlcn =  htmlcn + "<th>" + note.idt + "</th>"
                htmlcn =  htmlcn + "<th>" + note.ntty + "</th>"
                htmlcn =  htmlcn + "<th>" + note.val + "</th>"
                htmlcn =  htmlcn + "<th>" + item.txval + "</th>"     
                htmlcn =  htmlcn + "<th>" + item.rt + "%" + "</th>"
                
                if(item["iamt"] != undefined){
                    htmlcn = htmlcn + "<th>" + item["iamt"] + "</th>"
                }else{
                	htmlcn = htmlcn + "<th>" + 0 + "</th>"
                }
                if(item["camt"] != undefined){
                    htmlcn = htmlcn + "<th>" + item["camt"] + "</th>"
                }else{
                	htmlcn = htmlcn + "<th>" + 0 + "</th>"
                }
                if(item["samt"] != undefined){
                    htmlcn = htmlcn + "<th>" + item["samt"] + "</th>"
                }else{
                	htmlcn = htmlcn + "<th>" + 0 + "</th>"
                }
                htmlcn = htmlcn + "</tr>";
                                      }
           
        
        }


    }

    document.getElementById("tblhead_gstrCN").innerHTML = "<th>GSTIN</th><th>Credit Note No.</th><th>Credit Note Date</th><th>Original Invoice No.</th><th>Original Invoice Date</th><th>Type</th><th>Credit Note Value</th><th>Taxable Value</th><th>Rate</th><th>IGST</th><th>CGST</th><th>SGST</th>";
    document.getElementById("table2").innerHTML = htmlcn;


})

document.getElementById("btn-clear").addEventListener("click",function(){
    document.getElementById("txtArea").value = "";
})

document.getElementById("btn-exportB2B").addEventListener("click",function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById("tbl_gstrB2B");
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'B2B.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
})

document.getElementById("btn-exportCN").addEventListener("click",function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById("tbl_gstrCN");
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'CN.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
})