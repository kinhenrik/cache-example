# Cache-implementation 

### localStorage 
- Inbyggt funktion i browsern som kan spara data lokalt i cache 
- Behöver en JSON-payload att spara

*Exempel:* 
```
{ 
	“data”: { // här kan man ta in all data som skrivs in i textfälten 
		“city”: “Stockholm”, 
		“budget”: 10000, 
		// allt annat som sparas i cache 
	}, 
	“currentStep”: // vilket steg i Wizarden man är på 
	“expiresAt”: // timer tills cache tas bort (15 min) 
}
```
<br/>

Vi behöver också skapa en egen ReactHook som hanterar alla cache/localStorage-funktioner. 

*Exempel på funktioner som vår Hook kan innehålla:*

- ```saveCache(data)```, sparar payloaden och uppdaterar timestamp på cache 

- ```getCache()```, getter för cache för att t.ex. kolla när den expirerar 

- ```deleteCache()```, tar bort all cache t.ex. när användaren startar en ny sökning eller när getCache ser att tiden på cache har expirerat
<br/>

*Exempel på hur funktionerna kan användas:*

- ```getCache()``` används alltid när sidan laddas, om den hittar en giltig cache, uppdatera frontend med typ “Du har en tidigare sökning sparad, vill du fortsätta där du slutade?” och en “Återuppta”-knapp 

	- Om dom trycker nej på knappen, kör ```deleteCache()```

	- Om dom trycker ja, uppdatera alla textfält med t.ex. ```useState``` (inbyggd ReactHook) med datan från “data”-fältet i JSON-payloaden 

- ```saveCache(data)``` används antingen efter varje ny uppdatering eller när man går till nästa steg 
<br/>

### Steg att utföra 

- Bygg vår egna ReactHook och implementera ```saveCache/getCache/deleteCache```. Se till att ```getCache``` automatiskt rensar datan om timern är slut 

- Gör så att startsidan kan läsa av getCache och skriv ut "Du har en tidigare sökning sparad..." och skapa “Återuppta”-knappen i frontend om en giltig cache hittas. 

- Gör så att datan i cache kan fyllas i de tomma fälten när man trycker på “Återuppta”-knappen 
