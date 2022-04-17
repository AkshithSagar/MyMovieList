package moviefeed

type MovieStatus struct {
	Userid  int    `json:"userid"`
	Movieid int    `json:"movieid"`
	Status  string `json:"status"` //PTW,Completed,Watching
}
