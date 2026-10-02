/* =================================================
   AMAN TUSHER PERSONAL PROFILE
   EDITABLE PROFILE SYSTEM
================================================= */


/* ================= DEFAULT DATA ================= */

const defaultProfile = {

    name: "Aman Tusher",

    role: "B.Tech CSE Student & Developer",

    email: "amantusher6@gmail.com",

    phone: "",

    course: "B.Tech Computer Science & Engineering - 2nd Year",

    college: "R.R. Group of Institutions, Lucknow",

    location: "Lucknow, Uttar Pradesh",

    bio: "I am a B.Tech Computer Science & Engineering student interested in programming, web development, Android development and building useful technology projects.",

    photo: "",

    github: "https://github.com/amantusher6-byte",

    linkedin: "",

    youtube: "",

    shortGoal:
        "Improve programming skills, build professional projects and gain practical industry experience.",

    longGoal:
        "Become a successful software developer and build useful technology products.",

    education: [

        {
            degree: "B.Tech Computer Science & Engineering",
            institute: "R.R. Group of Institutions, Lucknow",
            year: "2nd Year",
            details: "Computer Science & Engineering"
        }

    ],

    skills: [

        {
            name: "Java",
            percent: 80
        },

        {
            name: "JavaScript",
            percent: 75
        },

        {
            name: "HTML & CSS",
            percent: 85
        },

        {
            name: "C / C++",
            percent: 70
        },

        {
            name: "DSA",
            percent: 65
        },

        {
            name: "Android Development",
            percent: 60
        }

    ],

    projects: [

        {
            name: "SUB Bank",
            tech: "HTML, CSS, JavaScript",
            description:
                "A beginner-friendly banking system project with dashboard, balance, deposit, withdrawal and transfer features.",
            url: "https://amantusher6-byte.github.io/SUB-BANK-v2/"
        },

        {
            name: "Scientific Calculator",
            tech: "HTML, CSS, JavaScript",
            description:
                "A professional scientific calculator project designed for mathematical calculations.",
            url: ""
        },

        {
            name: "SmartPath",
            tech: "Android Development",
            description:
                "An education app concept designed to provide structured learning content, tests, notes and AI assistance.",
            url: ""
        }

    ],

    experience: [

        {
            role: "Summer Training / Internship",
            company: "JavaScript Training",
            duration: "30 Days",
            description:
                "Practical learning and development using JavaScript, web technologies and project-based practice."
        }

    ],

    certificates: []

};


/* ================= LOAD PROFILE ================= */

let profile =
    JSON.parse(localStorage.getItem("amanProfile")) ||
    JSON.parse(JSON.stringify(defaultProfile));


/* ================= SAVE PROFILE ================= */

function saveProfile() {

    localStorage.setItem(
        "amanProfile",
        JSON.stringify(profile)
    );

}


/* ================= INITIAL LOAD ================= */

document.addEventListener("DOMContentLoaded", function () {

    renderProfile();

    loadDashboardData();

    document.getElementById("footerYear").textContent =
        new Date().getFullYear();

});


/* =================================================
   RENDER PUBLIC PROFILE
================================================= */

function renderProfile() {

    /* PERSONAL */

    document.getElementById("homeName").textContent =
        profile.name;

    document.getElementById("footerName").textContent =
        profile.name;

    document.getElementById("homeRole").textContent =
        profile.role;

    document.getElementById("homeBio").textContent =
        profile.bio;

    document.getElementById("aboutName").textContent =
        profile.name;

    document.getElementById("aboutBio").textContent =
        profile.bio;

    document.getElementById("aboutCourse").textContent =
        profile.course;

    document.getElementById("aboutCollege").textContent =
        profile.college;

    document.getElementById("aboutEmail").textContent =
        profile.email;

    document.getElementById("aboutLocation").textContent =
        profile.location;


    /* PHOTO */

    if (profile.photo) {

        document.getElementById("profileImage").src =
            profile.photo;

        document.getElementById("photoPreview").src =
            profile.photo;

    }


    /* SOCIAL */

    const github =
        document.getElementById("githubLink");

    github.href =
        profile.github || "#";


    const linkedin =
        document.getElementById("linkedinLink");

    linkedin.href =
        profile.linkedin || "#";


    const youtube =
        document.getElementById("youtubeLink");

    youtube.href =
        profile.youtube || "#";


    /* EMAIL */

    document.getElementById("emailButton").href =
        "mailto:" + profile.email;


    /* GOALS */

    document.getElementById("shortGoal").textContent =
        profile.shortGoal;

    document.getElementById("longGoal").textContent =
        profile.longGoal;


    /* OTHER SECTIONS */

    renderEducation();

    renderSkills();

    renderProjects();

    renderExperience();

    renderCertificates();

}


/* =================================================
   DASHBOARD
================================================= */

function openDashboard() {

    document
        .getElementById("dashboard")
        .classList.add("show");

    loadDashboardData();

}


function closeDashboard() {

    document
        .getElementById("dashboard")
        .classList.remove("show");

}


/* ================= TABS ================= */

function showTab(tabId) {

    document
        .querySelectorAll(".dashboard-tab")
        .forEach(tab => {

            tab.classList.remove("active");

        });


    document
        .getElementById(tabId)
        .classList.add("active");

}


/* =================================================
   LOAD PERSONAL DATA
================================================= */

function loadDashboardData() {

    document.getElementById("inputName").value =
        profile.name;

    document.getElementById("inputRole").value =
        profile.role;

    document.getElementById("inputEmail").value =
        profile.email;

    document.getElementById("inputPhone").value =
        profile.phone;

    document.getElementById("inputCourse").value =
        profile.course;

    document.getElementById("inputCollege").value =
        profile.college;

    document.getElementById("inputLocation").value =
        profile.location;

    document.getElementById("inputBio").value =
        profile.bio;

    document.getElementById("inputGithub").value =
        profile.github;

    document.getElementById("inputLinkedin").value =
        profile.linkedin;

    document.getElementById("inputYoutube").value =
        profile.youtube;

    document.getElementById("inputShortGoal").value =
        profile.shortGoal;

    document.getElementById("inputLongGoal").value =
        profile.longGoal;


    if (profile.photo) {

        document.getElementById("photoPreview").src =
            profile.photo;

    }


    renderAdminLists();

}


/* =================================================
   SAVE PERSONAL
================================================= */

function savePersonal() {

    profile.name =
        document.getElementById("inputName").value.trim();

    profile.role =
        document.getElementById("inputRole").value.trim();

    profile.email =
        document.getElementById("inputEmail").value.trim();

    profile.phone =
        document.getElementById("inputPhone").value.trim();

    profile.course =
        document.getElementById("inputCourse").value.trim();

    profile.college =
        document.getElementById("inputCollege").value.trim();

    profile.location =
        document.getElementById("inputLocation").value.trim();

    profile.bio =
        document.getElementById("inputBio").value.trim();

    profile.github =
        document.getElementById("inputGithub").value.trim();

    profile.linkedin =
        document.getElementById("inputLinkedin").value.trim();

    profile.youtube =
        document.getElementById("inputYoutube").value.trim();


    saveProfile();

    renderProfile();

    alert("✅ Personal information saved successfully!");

}


/* =================================================
   PHOTO
================================================= */

function previewPhoto(event) {

    const file =
        event.target.files[0];

    if (!file) return;


    const reader =
        new FileReader();


    reader.onload = function (e) {

        profile.photo =
            e.target.result;

        document.getElementById("photoPreview").src =
            e.target.result;

        saveProfile();

        renderProfile();

    };


    reader.readAsDataURL(file);

}


/* =================================================
   EDUCATION
================================================= */

function addEducation() {

    const degree =
        document.getElementById("eduDegree").value.trim();

    const institute =
        document.getElementById("eduInstitute").value.trim();

    const year =
        document.getElementById("eduYear").value.trim();

    const details =
        document.getElementById("eduDetails").value.trim();


    if (!degree || !institute) {

        alert("Please enter degree and institute.");

        return;

    }


    profile.education.push({

        degree,
        institute,
        year,
        details

    });


    saveProfile();

    renderProfile();

    renderAdminLists();


    document.getElementById("eduDegree").value = "";
    document.getElementById("eduInstitute").value = "";
    document.getElementById("eduYear").value = "";
    document.getElementById("eduDetails").value = "";

}


function deleteEducation(index) {

    if (!confirm("Delete this education?")) return;

    profile.education.splice(index, 1);

    saveProfile();

    renderProfile();

    renderAdminLists();

}


/* =================================================
   SKILLS
================================================= */

function addSkill() {

    const name =
        document.getElementById("skillName").value.trim();

    const percent =
        Number(
            document.getElementById("skillPercent").value
        );


    if (!name) {

        alert("Please enter skill name.");

        return;

    }


    profile.skills.push({

        name,

        percent:
            Math.min(100, Math.max(1, percent))

    });


    saveProfile();

    renderProfile();

    renderAdminLists();


    document.getElementById("skillName").value = "";

}


function deleteSkill(index) {

    if (!confirm("Delete this skill?")) return;

    profile.skills.splice(index, 1);

    saveProfile();

    renderProfile();

    renderAdminLists();

}


/* =================================================
   PROJECTS
================================================= */

function addProject() {

    const name =
        document.getElementById("projectName").value.trim();

    const tech =
        document.getElementById("projectTech").value.trim();

    const description =
        document
            .getElementById("projectDescription")
            .value
            .trim();

    const url =
        document.getElementById("projectUrl").value.trim();


    if (!name) {

        alert("Please enter project name.");

        return;

    }


    profile.projects.push({

        name,
        tech,
        description,
        url

    });


    saveProfile();

    renderProfile();

    renderAdminLists();


    document.getElementById("projectName").value = "";

    document.getElementById("projectTech").value = "";

    document.getElementById("projectDescription").value = "";

    document.getElementById("projectUrl").value = "";

}


function deleteProject(index) {

    if (!confirm("Delete this project?")) return;

    profile.projects.splice(index, 1);

    saveProfile();

    renderProfile();

    renderAdminLists();

}


/* =================================================
   EXPERIENCE
================================================= */

function addExperience() {

    const role =
        document.getElementById("expRole").value.trim();

    const company =
        document.getElementById("expCompany").value.trim();

    const duration =
        document.getElementById("expDuration").value.trim();

    const description =
        document
            .getElementById("expDescription")
            .value
            .trim();


    if (!role || !company) {

        alert("Please enter role and company.");

        return;

    }


    profile.experience.push({

        role,
        company,
        duration,
        description

    });


    saveProfile();

    renderProfile();

    renderAdminLists();


    document.getElementById("expRole").value = "";

    document.getElementById("expCompany").value = "";

    document.getElementById("expDuration").value = "";

    document.getElementById("expDescription").value = "";

}


function deleteExperience(index) {

    if (!confirm("Delete this experience?")) return;

    profile.experience.splice(index, 1);

    saveProfile();

    renderProfile();

    renderAdminLists();

}


/* =================================================
   CERTIFICATES
================================================= */

function addCertificate() {

    const name =
        document
            .getElementById("certificateName")
            .value
            .trim();

    const issuer =
        document
            .getElementById("certificateIssuer")
            .value
            .trim();

    const year =
        document
            .getElementById("certificateYear")
            .value
            .trim();

    const url =
        document
            .getElementById("certificateUrl")
            .value
            .trim();


    if (!name) {

        alert("Please enter certificate name.");

        return;

    }


    profile.certificates.push({

        name,
        issuer,
        year,
        url

    });


    saveProfile();

    renderProfile();

    renderAdminLists();


    document.getElementById("certificateName").value = "";

    document.getElementById("certificateIssuer").value = "";

    document.getElementById("certificateYear").value = "";

    document.getElementById("certificateUrl").value = "";

}


function deleteCertificate(index) {

    if (!confirm("Delete this certificate?")) return;

    profile.certificates.splice(index, 1);

    saveProfile();

    renderProfile();

    renderAdminLists();

}


/* =================================================
   GOALS
================================================= */

function saveGoals() {

    profile.shortGoal =
        document.getElementById("inputShortGoal").value.trim();

    profile.longGoal =
        document.getElementById("inputLongGoal").value.trim();


    saveProfile();

    renderProfile();

    alert("✅ Goals saved successfully!");

}


/* =================================================
   RENDER EDUCATION
================================================= */

function renderEducation() {

    const container =
        document.getElementById("educationContainer");


    if (profile.education.length === 0) {

        container.innerHTML =
            "<p>No education information added yet.</p>";

        return;

    }


    container.innerHTML =
        profile.education.map(item => `

            <div class="info-card">

                <h3>${escapeHTML(item.degree)}</h3>

                <div class="meta">
                    ${escapeHTML(item.institute)}
                </div>

                <p>
                    ${escapeHTML(item.year)}
                </p>

                <p>
                    ${escapeHTML(item.details)}
                </p>

            </div>

        `).join("");

}


/* =================================================
   RENDER SKILLS
================================================= */

function renderSkills() {

    const container =
        document.getElementById("skillsContainer");


    if (profile.skills.length === 0) {

        container.innerHTML =
            "<p>No skills added yet.</p>";

        return;

    }


    container.innerHTML =
        profile.skills.map(skill => `

            <div class="skill-card">

                <div class="skill-top">

                    <strong>
                        ${escapeHTML(skill.name)}
                    </strong>

                    <span>
                        ${skill.percent}%
                    </span>

                </div>

                <div class="progress">

                    <div
                        class="progress-bar"
                        style="width:${skill.percent}%">
                    </div>

                </div>

            </div>

        `).join("");

}


/* =================================================
   RENDER PROJECTS
================================================= */

function renderProjects() {

    const container =
        document.getElementById("projectsContainer");


    if (profile.projects.length === 0) {

        container.innerHTML =
            "<p>No projects added yet.</p>";

        return;

    }


    container.innerHTML =
        profile.projects.map(project => `

            <div class="info-card">

                <h3>
                    ${escapeHTML(project.name)}
                </h3>

                <div class="meta">
                    ${escapeHTML(project.tech)}
                </div>

                <p>
                    ${escapeHTML(project.description)}
                </p>

                ${
                    project.url
                    ?
                    `
                    <a
                        class="project-link"
                        href="${safeURL(project.url)}"
                        target="_blank">
                        🔗 View Project
                    </a>
                    `
                    :
                    ""
                }

            </div>

        `).join("");

}


/* =================================================
   RENDER EXPERIENCE
================================================= */

function renderExperience() {

    const container =
        document.getElementById("experienceContainer");


    if (profile.experience.length === 0) {

        container.innerHTML =
            "<p>No experience added yet.</p>";

        return;

    }


    container.innerHTML =
        profile.experience.map(item => `

            <div class="info-card">

                <h3>
                    ${escapeHTML(item.role)}
                </h3>

                <div class="meta">
                    ${escapeHTML(item.company)}
                    ${
                        item.duration
                        ? " • " + escapeHTML(item.duration)
                        : ""
                    }
                </div>

                <p>
                    ${escapeHTML(item.description)}
                </p>

            </div>

        `).join("");

}


/* =================================================
   RENDER CERTIFICATES
================================================= */

function renderCertificates() {

    const container =
        document.getElementById("certificatesContainer");


    if (profile.certificates.length === 0) {

        container.innerHTML = `
            <div class="info-card">
                <h3>Certificates Coming Soon</h3>
                <p>
                    Certificates can be added from the Edit Dashboard.
                </p>
            </div>
        `;

        return;

    }


    container.innerHTML =
        profile.certificates.map(item => `

            <div class="info-card">

                <h3>
                    ${escapeHTML(item.name)}
                </h3>

                <div class="meta">
                    ${escapeHTML(item.issuer)}
                    ${
                        item.year
                        ? " • " + escapeHTML(item.year)
                        : ""
                    }
                </div>

                ${
                    item.url
                    ?
                    `
                    <a
                        class="certificate-link"
                        href="${safeURL(item.url)}"
                        target="_blank">
                        📜 View Certificate
                    </a>
                    `
                    :
                    ""
                }

            </div>

        `).join("");

}


/* =================================================
   ADMIN LISTS
================================================= */

function renderAdminLists() {


    /* EDUCATION */

    document.getElementById("educationAdminList").innerHTML =

        profile.education.map((item, index) => `

            <div class="admin-item">

                <div class="admin-item-info">

                    <strong>
                        ${escapeHTML(item.degree)}
                    </strong>

                    <small>
                        ${escapeHTML(item.institute)}
                        ${
                            item.year
                            ? " • " + escapeHTML(item.year)
                            : ""
                        }
                    </small>

                </div>

                <button
                    class="delete-btn"
                    onclick="deleteEducation(${index})">
                    Delete
                </button>

            </div>

        `).join("");


    /* SKILLS */

    document.getElementById("skillsAdminList").innerHTML =

        profile.skills.map((item, index) => `

            <div class="admin-item">

                <div class="admin-item-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <small>
                        ${item.percent}%
                    </small>

                </div>

                <button
                    class="delete-btn"
                    onclick="deleteSkill(${index})">
                    Delete
                </button>

            </div>

        `).join("");


    /* PROJECTS */

    document.getElementById("projectsAdminList").innerHTML =

        profile.projects.map((item, index) => `

            <div class="admin-item">

                <div class="admin-item-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <small>
                        ${escapeHTML(item.tech)}
                    </small>

                </div>

                <button
                    class="delete-btn"
                    onclick="deleteProject(${index})">
                    Delete
                </button>

            </div>

        `).join("");


    /* EXPERIENCE */

    document.getElementById("experienceAdminList").innerHTML =

        profile.experience.map((item, index) => `

            <div class="admin-item">

                <div class="admin-item-info">

                    <strong>
                        ${escapeHTML(item.role)}
                    </strong>

                    <small>
                        ${escapeHTML(item.company)}
                    </small>

                </div>

                <button
                    class="delete-btn"
                    onclick="deleteExperience(${index})">
                    Delete
                </button>

            </div>

        `).join("");


    /* CERTIFICATES */

    document.getElementById("certificatesAdminList").innerHTML =

        profile.certificates.map((item, index) => `

            <div class="admin-item">

                <div class="admin-item-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <small>
                        ${escapeHTML(item.issuer)}
                    </small>

                </div>

                <button
                    class="delete-btn"
                    onclick="deleteCertificate(${index})">
                    Delete
                </button>

            </div>

        `).join("");

}


/* =================================================
   EXPORT PROFILE
================================================= */

function exportProfile() {

    const data =
        JSON.stringify(profile, null, 2);


    const blob =
        new Blob(
            [data],
            { type: "application/json" }
        );


    const url =
        URL.createObjectURL(blob);


    const a =
        document.createElement("a");


    a.href = url;

    a.download =
        "aman-tusher-profile-backup.json";


    a.click();


    URL.revokeObjectURL(url);

}


/* =================================================
   IMPORT PROFILE
================================================= */

function importProfile(event) {

    const file =
        event.target.files[0];

    if (!file) return;


    const reader =
        new FileReader();


    reader.onload = function (e) {

        try {

            const imported =
                JSON.parse(e.target.result);


            profile = imported;

            saveProfile();

            renderProfile();

            loadDashboardData();

            alert(
                "✅ Profile data imported successfully!"
            );

        }

        catch (error) {

            alert(
                "❌ Invalid profile JSON file."
            );

        }

    };


    reader.readAsText(file);

}


/* =================================================
   RESET PROFILE
================================================= */

function resetProfile() {

    const confirmReset =
        confirm(
            "Are you sure you want to reset your profile?"
        );


    if (!confirmReset) return;


    profile =
        JSON.parse(
            JSON.stringify(defaultProfile)
        );


    saveProfile();

    renderProfile();

    loadDashboardData();


    alert(
        "♻️ Profile has been reset."
    );

}


/* =================================================
   SECURITY HELPERS
================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function safeURL(url) {

    try {

        const parsed =
            new URL(url);

        if (
            parsed.protocol === "http:" ||
            parsed.protocol === "https:"
        ) {

            return parsed.href;

        }

    }

    catch (error) {}

    return "#";

}


/* =================================================
   CLOSE DASHBOARD WITH ESC
================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeDashboard();

        }

    }
);