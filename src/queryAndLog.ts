import { Client } from "pg";
interface queryLogType {
  client: ;
  sqlQuery: string;
  parameters: (string | boolean | Date)[];
}

export default async function queryAndLog({
  client,
  sqlQuery,
  parameters = [],
}: queryLogType) {
  console.log(`SQL START qNum: 004 sql:${sqlQuery} params: [${parameters}]`);

  const runQuery = await client;
  const timePerformance = performance.now();
  console.log(
    `SQL END   qNum: 0004 time:${timePerformance}  rowCount:${client.rowCount}   sql:${sqlQuery} params:  [${parameters}]`
  );
}
