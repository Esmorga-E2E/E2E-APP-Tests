Feature: Test errors
	@finished
	Scenario: TC - Reach Error when list events
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When mock get events to response 404
		And tap on secondary button
		Then events list screen is shown
		And retry button content is shown