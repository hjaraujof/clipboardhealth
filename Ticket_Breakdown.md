# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

- Add the `customId` to the Agents table. Time: <1h. Effort: Low. Criteria: Be able to run a query against the Agents table and be able to obtain the `customId` field. `customId` can be empty at first in case we want to maintain compatibility. If we are willing to do a migration for this, then this custom id must be provided by the client. If all ids are provided and are unique, then we could add the constraint in the database for the field `customId` to be unique(in case we are using a relational database).
- Include `customId` field on database query done to the Agents table on the `getShiftsByFacility` method. Time: <1h. Effort: Low. Criteria: The `getShiftsByFacility` should be able to include the new field(or not, in case it hasn't been updated by the user. This is determined in the previous ticket, update description if `customId` field is constrained to be UNIQUE. If the new field is set to be unique, then it's mandatory that this field is included in the Agents metadata for each Shift).
- Include the condition on the `generateReport` for the new `customId` to be used on the report(Include fallback to databaseId in case the field has not been updated by the client and if the field is not constrained to be unique). Time: <1h
- Include/modify tests to make sure the data used to generate the report works as intended and `customId` is shown on the report correctly.
