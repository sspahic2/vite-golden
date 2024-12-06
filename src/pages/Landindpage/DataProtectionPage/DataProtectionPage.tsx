import Typography from '../../../components/Typography'
import { DATA_PROTECTION_POLICY_PATH_SCROLL } from '../../../config/PathForScroll'

const DataProtectionPage = () => {
    return (
        <div id={DATA_PROTECTION_POLICY_PATH_SCROLL} className='flex flex-col container mx-auto my-20'>
            <Typography size="normal" >Vielen Dank für Ihren Besuch auf unserer Website. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, welche Daten während Ihres Besuchs auf unserer Website erfasst und wie diese genutzt werden:</Typography>

            <div className='p-4 flex flex-col'>
                <Typography size="normal">1. Erfassung und Verarbeitung von Daten</Typography>
                <Typography size="normal">2. Bei jedem Zugriff auf unsere Website und bei jedem Abruf einer Datei werden automatisch Daten über diesen Vorgang in einer Protokolldatei gespeichert. Diese Daten sind nicht personenbezogen und lassen daher keine Rückschlüsse auf Ihre Identität zu. Die protokollierten Daten umfassen beispielsweise den Namen Ihres Internet Service Providers, die Webseite, von der aus Sie uns besuchen, die Webseiten, die Sie bei uns besuchen, sowie das Datum und die Dauer des Besuchs. Diese Daten werden ausschließlich zu statistischen Zwecken ausgewertet und dienen der Verbesserung unseres Angebots.</Typography>
                <Typography size="normal">3. Verwendung von Cookies</Typography>
                <Typography size="normal">4. Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Einige der von uns verwendeten Cookies werden nach Ende der Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endgerät und ermöglichen uns oder unseren Partnerunternehmen, Ihren Browser beim nächsten Besuch wiederzuerkennen (persistente Cookies). Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.</Typography>
                <Typography size="normal">5. Datenübermittlung an Dritte</Typography>
                <Typography size="normal">6. Eine Übermittlung Ihrer personenbezogenen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</Typography>
                <Typography size="normal" className='pt-3'>- Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</Typography>
                <Typography size="normal">- die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,</Typography>
                <Typography size="normal">- die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,</Typography>
                <Typography size="normal">- die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</Typography>
                <Typography size="normal" className='pt-2'>1. Datensicherheit</Typography>
                <Typography size="normal">2. Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.</Typography>
                <Typography size="normal">3. Auskunftsrecht</Typography>
                <Typography size="normal">4. Sie haben das Recht, auf Antrag unentgeltlich Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten. Zusätzlich haben Sie das Recht auf Berichtigung unrichtiger Daten, Sperrung und Löschung Ihrer personenbezogenen Daten, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.</Typography>
                <Typography size="normal">5. Kontaktaufnahme</Typography>
                <Typography size="normal">6. Für Fragen zum Datenschutz auf unserer Website oder zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten sowie für Auskünfte, Berichtigung, Sperrung oder Löschung von Daten können Sie sich jederzeit an uns wenden unter:</Typography>
                <Typography size="normal">7. Goldene Seiten GmbH</Typography>
                <Typography size="normal">8. Musterstraße 123</Typography>
                <Typography size="normal">9. 12345 Musterstadt</Typography>
                <Typography size="normal">10. E-Mail: datenschutz@goldeneseiten.de</Typography>
            </div>
        </div>
    )
}

export default DataProtectionPage