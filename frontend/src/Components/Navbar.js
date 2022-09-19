import React from "react";

const Navbar = () => {

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white">

            <div class="container-fluid">
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <a class="navbar-brand mt-2 mt-lg-0" href="https://s3-alpha-sig.figma.com/img/bda9/6988/f6bb9156871eb1cf4b63e0e4c25694f8?Expires=1664150400&Signature=ILSAt4jA11ISUzc88yKkN39TSK2Q27bARQ7A2JGQOJnmZuV4bHVfiiLfwOtk1v1j611SnlGDuZhGaMFjSftsFbrmdXt~CXc9~J4x6mwQ3Y9D-U0I2iYb13Cx9rcgMFwMT-x-8yHxnXw-6sFqac5No4TQCyvwlY4VY0-1rNbCN5GuD4q1sgZs8GuDmRmcjmdfCeKLl31TVMSVMF8seTsfMPIK4JsrHt~Ge-FumaSEqtnzzsIIB-TWMqaUYZ2xcj9tK0waqOghqZEosVl1aDPKpZVTebUfAHx1zVeeEsNQqvn4FEp4ruhWOqK7uU~ahLTlkd-MNoHWx17xnP8ZVbW94A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">SHINE</a>
                    <form className="col-sm-6">
                        <input id ="search" className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <div class="d-flex align-items-center">
                
                        <a class="link-secondary me-3" href="#">Explore</a>
                        <a class="link-secondary me-3" href="#">Create</a>
                        <a class="link-secondary me-3" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                            </svg>
                        </a>
                        <a class="link-secondary me-3" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </a>
                        <a class="link-secondary me-3" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
                        </a>
                    </div>
                </div>
            </div>
        
        </nav>

    )
}

export default Navbar;


