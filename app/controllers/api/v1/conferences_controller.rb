class Api::V1::ConferencesController < Api::V1::BaseController
  def index
    respond_with Conference.all
  end

  def create
    respond_with :api, :v1, Conference.create(conference_params)
  end

  def destroy
    respond_with Conference.destroy(params[:id])
  end

  def update
    conference = Conference.find(params["id"])
    conference.update_attributes(conference_params)
    respond_with conference, json: conference
  end

  private

  def conference_params
    params.require(:conference).permit(:id, :name, :description)
  end
end
