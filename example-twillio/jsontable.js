       var CallLog = [
            {
                "Calls Received": "20",
                "Calls to Voicemail": "20",
                "Calls Left": "20"
            },
            {
                "Calls Received": "20",
                "Calls to Voicemail": "20",
                "Calls Left": "20"
            },
            {
                "Calls Received": "20",
                "Calls to Voicemail": "20",
                "Calls Left": "20"
            }
        ]

        var RecentsCalls = [
            {
                "ID": "1",
                "Full Name": "First Last",
                "Phone Number": "Example Number1",
                "City": "City1",
                "State": "State1"
            },
            {
                "ID": "2",
                "Full Name": "First Last",
                "Phone Number": "Example Number2",
                "City": "City2",
                "State": "State2"
            },
            {
                "ID": "3",
                "Full Name": "First Last",
                "Phone Number": "Example Number3",
                "City": "City3",
                "State": "State3"
            }
        ]
    function CreateRecents() {
        var col = [];
        for (var i = 0; i < RecentsCalls.length; i++) {
            for (var key in RecentsCalls[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < RecentsCalls.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = RecentsCalls[i][col[j]];
            }
        }

        //ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }



    //Call Dashboard
    function CreateCallLog() {
        var col = [];
        for (var i = 0; i < CallLog.length; i++) {
            for (var key in CallLog[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        var table = document.createElement("table");

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < CallLog.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = CallLog[i][col[j]];
            }
        }

        //ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData2");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    CreateRecents()
    CreateCallLog()

    
 
